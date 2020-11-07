package org.rimple.fooberry.graphqlapi;

import graphql.kickstart.tools.GraphQLQueryResolver;
import org.rimple.fooberry.graphqlapi.schematypes.Game;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import org.rimple.fooberry.graphqlapi.schematypes.*;

@Component
public class QueryResolver implements GraphQLQueryResolver {
    public ArrayList<Game> queryGames(String gameQueryString) {
        var list = new ArrayList<Game>();
        var game = new Game();
        game.setGameId(gameQueryString);
        game.setCols(10);
        game.setRows(10);
        game.setPlayers(new ArrayList<ActorInfo>());
        list.add(game);
        return list;
    }

    public Game getGameInfo(String gameId, String userId) {
        var game = new Game();
        game.setGameId(gameId);
        game.setCols(10);
        game.setRows(10);
        game.setPlayers(new ArrayList<ActorInfo>());
        return game;
    }
}