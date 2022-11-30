package dgsw.hs.kr.woojaeboard.controller;


import dgsw.hs.kr.woojaeboard.config.JwtTokenProvider;
import dgsw.hs.kr.woojaeboard.entity.User;
import dgsw.hs.kr.woojaeboard.repository.UserRepository;
import dgsw.hs.kr.woojaeboard.response.ResponseData;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RequestMapping("")
@RestController
@RequiredArgsConstructor
public class UserController {

    @Autowired
    PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    @PostMapping("/register")
    public void register(@RequestBody User user){
        System.out.println("회원가입");
        System.out.println(user.toString());
        User newUser = User.builder()
                .id(user.getId())
                .password(passwordEncoder.encode(user.getPassword()))
                .name(user.getName())
                .build();

        userRepository.save(newUser);
    }

    @PostMapping("/login")
    public ResponseData<String> login(@RequestBody User user) {

        Optional<User> member = userRepository.findById(user.getId());

        if (member.isEmpty()) {
            return new ResponseData<>(
                    HttpStatus.NOT_FOUND.value(),
                    "등록되지 않은 id입니다",
                    null
            );
        }

        if (!passwordEncoder.matches(user.getPassword(), member.get().getPassword())) {
            return new ResponseData<>(
                    HttpStatus.NOT_FOUND.value(),
                    "비밀번호가 틀립니다",
                    null
            );
        }

        String token = jwtTokenProvider.createToken(member.get().getUsername());
        return new ResponseData<>(
                HttpStatus.OK.value(),
                "토큰 반환",
                token
        );
    }

    @GetMapping("/userinfo")
    public ResponseData<Optional<User>> getUserInfo(HttpServletRequest request){
        System.out.println("정보확인");
        System.out.println(request.toString());
        String token = jwtTokenProvider.resolveToken(request);
        String id = jwtTokenProvider.getUserPk(token);
        return new ResponseData<>(HttpStatus.OK.value(), "",userRepository.findById(id));
    }
}
