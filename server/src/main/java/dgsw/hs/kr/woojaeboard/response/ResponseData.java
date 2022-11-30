package dgsw.hs.kr.woojaeboard.response;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ResponseData<T> extends Response{

    private final T data;

    @Builder
    public ResponseData(int status, String message, T data) {
        super(status, message);
        this.data = data;
    }
}
