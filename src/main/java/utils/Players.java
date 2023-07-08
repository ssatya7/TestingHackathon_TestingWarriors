package utils;

public class Players {
    String playerName;
    String matchesPlayed;
    String runs;
    String avg;
    String sR;
    String hundreds;
    String fifties;

    public Players(String playerName, String matchesPlayed, String runs, String avg, String sR, String hundreds, String fifties) {
        this.playerName = playerName;
        this.matchesPlayed = matchesPlayed;
        this.runs = runs;
        this.avg = avg;
        this.sR = sR;
        this.hundreds = hundreds;
        this.fifties = fifties;
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

    public String getRuns() {
        return runs;
    }

    public void setRuns(String runs) {
        this.runs = runs;
    }

    public String getAvg() {
        return avg;
    }

    public void setAvg(String avg) {
        this.avg = avg;
    }

    public String getsR() {
        return sR;
    }

    public void setsR(String sR) {
        this.sR = sR;
    }

    public String getHundreds() {
        return hundreds;
    }

    public void setHundreds(String hundreds) {
        this.hundreds = hundreds;
    }

    public String getFifties() {
        return fifties;
    }

    public void setFifties(String fifties) {
        this.fifties = fifties;
    }

}
