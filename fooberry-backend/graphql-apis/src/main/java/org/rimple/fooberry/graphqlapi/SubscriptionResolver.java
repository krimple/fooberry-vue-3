package org.rimple.fooberry.graphqlapi;

import graphql.kickstart.tools.GraphQLSubscriptionResolver;
import org.rimple.fooberry.graphqlapi.schematypes.Game;
import org.springframework.stereotype.Component;

@Component
public class SubscriptionResolver implements GraphQLSubscriptionResolver {


   Game playerMoves(String gameId, String userId) {
      return new Game();
   }

}
