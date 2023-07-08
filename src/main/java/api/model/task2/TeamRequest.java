package api.model.task2;

import java.util.ArrayList;

public class TeamRequest {
    private ArrayList<String> years;
    private String teamName;

    public  TeamRequest(){

    }
    public TeamRequest(ArrayList<String> years, String teamName) {
        this.years = years;
        this.teamName = teamName;
    }

    public ArrayList<String> getYears() {
        return years;
    }

    public void setYears(ArrayList<String> years) {
        this.years = years;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
}