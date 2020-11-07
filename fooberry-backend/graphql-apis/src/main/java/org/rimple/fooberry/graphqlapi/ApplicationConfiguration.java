package org.rimple.fooberry.graphqlapi;

import graphql.annotations.AnnotationsSchemaCreator;
import graphql.kickstart.tools.SchemaParser;
import graphql.schema.GraphQLSchema;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.management.Query;

@SpringBootApplication
@Configuration
public class ApplicationConfiguration {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationConfiguration.class, args);
    }

    @Bean
    GraphQLSchema schema() {
        GraphQLSchema graphQLSchema = SchemaParser.newParser()
                .file("schema.graphqls")
                .resolvers(new QueryResolver(), new MutationResolver())
                .build()
                .makeExecutableSchema();

        return graphQLSchema;


    }
}