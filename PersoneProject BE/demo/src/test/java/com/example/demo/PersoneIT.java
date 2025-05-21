package com.example.demo;

import java.net.URI;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class PersoneIT {
    
    @LocalServerPort
    private int port;

    private static final TestRestTemplate TEMPLATE = new TestRestTemplate();

    @Test
    void should_returnData_if_NofiltersArePresent() {
        // Arrange
        final RequestEntity<?> request = RequestEntity.get(
            URI.create("http://localhost:" + port + "/list")
        ).build();
        
        // execute
        final ResponseEntity<String> response = TEMPLATE.exchange(request, String.class);

        // Assert
        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
