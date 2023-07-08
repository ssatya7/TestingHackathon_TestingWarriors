
package api.model.task1;

public class Players {

    private String playerName;
    private String matchesPlayed;
    private String rusScored;
    private String average;
    private String strikeRate;
    private String hundredsScored;
    private String fiftiesScored;

    public Players() {
    }

    public Players(String playerName, String matchesPlayed, String rusScored, String average, String strikeRate, String hundredsScored, String fiftiesScored) {
        this.playerName = playerName;
        this.matchesPlayed = matchesPlayed;
        this.rusScored = rusScored;
        this.average = average;
        this.strikeRate = strikeRate;
        this.hundredsScored = hundredsScored;
        this.fiftiesScored = fiftiesScored;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getMatchesPlayed() {
        return matchesPlayed;
    }

    public void setMatchesPlayed(String matchesPlayed) {
        this.matchesPlayed = matchesPlayed;
    }

    public String getRusScored() {
        return rusScored;
    }

    public void setRusScored(String rusScored) {
        this.rusScored = rusScored;
    }

    public String getAverage() {
        return average;
    }

    public void setAverage(String average) {
        this.average = average;
    }

    public String getStrikeRate() {
        return strikeRate;
    }

    public void setStrikeRate(String strikeRate) {
        this.strikeRate = strikeRate;
    }

    public String getHundredsScored() {
        return hundredsScored;
    }

    public void setHundredsScored(String hundredsScored) {
        this.hundredsScored = hundredsScored;
    }

    public String getFiftiesScored() {
        return fiftiesScored;
    }

    public void setFiftiesScored(String fiftiesScored) {
        this.fiftiesScored = fiftiesScored;
    }
}