package api.model.task1;

import java.util.ArrayList;

public class TeamRequest {

    private String teamName;
    private String category;
    public ArrayList<Players> players;

    public TeamRequest(){

    }

    public TeamRequest(String teamName, String category, ArrayList<Players> players) {
        this.teamName = teamName;
        this.category = category;
        this.players = players;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public ArrayList<Players> getPlayers() {
        return players;
    }

    public void setPlayers(ArrayList<Players> players) {
        this.players = players;
    }
}