package api.model.task2;

import java.util.ArrayList;

public class TeamRequest {
    private String years;
    private String teamName;

    public  TeamRequest(){

    }
    public TeamRequest(String years, String teamName) {
        this.years = years;
        this.teamName = teamName;
    }

    public String getYears() {
        return years;
    }

    public void setYears(String years) {
        this.years = years;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
}