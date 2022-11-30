package dgsw.hs.kr.woojaeboard.repository;

import dgsw.hs.kr.woojaeboard.entity.Post;
import dgsw.hs.kr.woojaeboard.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {
}
