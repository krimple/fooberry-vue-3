package org.rimple.fooberry.graphqlapi.schematypes;

import java.util.Objects;

public class ActorInfo {
    private String player_id;
    private String name;
    private int strength;
    private Position position;

    public String getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(String player_id) {
        this.player_id = player_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ActorInfo actorInfo = (ActorInfo) o;
        return strength == actorInfo.strength && player_id.equals(actorInfo.player_id) && Objects.equals(name, actorInfo.name) && Objects.equals(position, actorInfo.position);
    }

    @Override
    public int hashCode() {
        return Objects.hash(player_id, name, strength, position);
    }
}
