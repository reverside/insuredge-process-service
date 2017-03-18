package za.co.reverside.service.process;

import com.zenerick.service.ProcessService;
import org.springframework.boot.SpringApplication;

@ProcessService
public class Application {

    public static void main(String[] args){
        SpringApplication.run(Application.class, args);
    }
}
