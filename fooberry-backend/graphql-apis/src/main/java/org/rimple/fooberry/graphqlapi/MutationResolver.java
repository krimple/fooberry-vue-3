package org.rimple.fooberry.graphqlapi;

import graphql.kickstart.tools.GraphQLMutationResolver;
import org.rimple.fooberry.graphqlapi.schematypes.Game;
import org.springframework.stereotype.Component;
import org.rimple.fooberry.graphqlapi.schematypes.*;

import java.util.ArrayList;

@Component
public class MutationResolver implements GraphQLMutationResolver {

    Game createGame(String gameId, String userId, String name, int rows, int cols) {
        var game = new Game();
        game.setGame_id(gameId);
        game.setName(name);
        game.setRows(rows);
        game.setCols(cols);
        game.setPlayers(new ArrayList<ActorInfo>());
        return game;
    }

    Position movePlayer(String gameId, String userId, Position position) {
        return position;
    }

}
