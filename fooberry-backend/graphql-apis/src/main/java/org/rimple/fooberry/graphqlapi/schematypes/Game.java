package org.rimple.fooberry.graphqlapi.schematypes;

import java.util.List;
import java.util.Objects;

public class Game {
    private String game_id;
    private String user_id;
    private String name;
    private int rows;
    private int cols;
    private List<ActorInfo> players;

    public String getGame_id() {
        return game_id;
    }

    public void setGame_id(String game_id) {
        this.game_id = game_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public int getRows() {
        return rows;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }

    public int getCols() {
        return cols;
    }

    public void setCols(int cols) {
        this.cols = cols;
    }

    public List<ActorInfo> getPlayers() {
        return players;
    }

    public void setPlayers(List<ActorInfo> players) {
        this.players = players;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Game game = (Game) o;
        return rows == game.rows && cols == game.cols && Objects.equals(game_id, game.game_id) && Objects.equals(user_id, game.user_id) && Objects.equals(name, game.name) && Objects.equals(players, game.players);
    }

    @Override
    public int hashCode() {
        return Objects.hash(game_id, user_id, name, rows, cols, players);
    }
}
