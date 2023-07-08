package api.model.task1;

public class Players {

    private String playerName;
    private int matchesPlayed;
    private int rusScored;
    private double average;
    private double strikeRate;
    private int hundredsScored;
    private int fiftiesScored;

    public Players(){

    }

    public Players(String playerName, int matchesPlayed, int rusScored, double average, double strikeRate, int hundredsScored, int fiftiesScored) {
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

    public int getMatchesPlayed() {
        return matchesPlayed;
    }

    public void setMatchesPlayed(int matchesPlayed) {
        this.matchesPlayed = matchesPlayed;
    }

    public int getRusScored() {
        return rusScored;
    }

    public void setRusScored(int rusScored) {
        this.rusScored = rusScored;
    }

    public double getAverage() {
        return average;
    }

    public void setAverage(double average) {
        this.average = average;
    }

    public double getStrikeRate() {
        return strikeRate;
    }

    public void setStrikeRate(double strikeRate) {
        this.strikeRate = strikeRate;
    }

    public int getHundredsScored() {
        return hundredsScored;
    }

    public void setHundredsScored(int hundredsScored) {
        this.hundredsScored = hundredsScored;
    }

    public int getFiftiesScored() {
        return fiftiesScored;
    }

    public void setFiftiesScored(int fiftiesScored) {
        this.fiftiesScored = fiftiesScored;
    }
}