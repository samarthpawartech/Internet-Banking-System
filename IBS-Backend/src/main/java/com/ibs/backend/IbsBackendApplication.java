package com.ibs.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class IbsBackendApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext context =
                SpringApplication.run(IbsBackendApplication.class, args);

        System.out.println("✅ Spring Boot started successfully!");
    }

}