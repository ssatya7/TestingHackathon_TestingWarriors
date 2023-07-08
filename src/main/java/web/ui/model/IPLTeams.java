package web.ui.model;

import java.util.EnumSet;

public enum IPLTeams {

    DC ("DC","Delhi Capitals"),
    CSK("CSK","Chennai Super Kings"),
    GT("GT","Gujarat Titans"),
    KKR("KKR","Kolkata Knight Riders"),
    LSG("LSG","Lucknow Super Giants"),
    MI("MI","Mumbai Indians"),
    PBKS("PBKS","Punjab Kings"),
    RR("RR","Rajasthan Royals"),
    RCB("RCB","Royal Challengers Bangalore"),
    SRH("SRH","Sunrisers Hyderabad");

    private String shortTeamName;
    private String fullTeamName;

    IPLTeams(String shortTeamName, String fullTeamName) {
        this.shortTeamName = shortTeamName;
        this.fullTeamName = fullTeamName;
    }

    public String getShortTeamName() {
        return shortTeamName;
    }

    public void setShortTeamName(String shortTeamName) {
        this.shortTeamName = shortTeamName;
    }

    public String getFullTeamName() {
        return fullTeamName;
    }

    public void setFullTeamName(String fullTeamName) {
        this.fullTeamName = fullTeamName;
    }

    static public IPLTeams parseString(String type) {
        return EnumSet.allOf(IPLTeams.class)
                .stream().filter(e -> e.getShortTeamName().equalsIgnoreCase(type))
                .findFirst().orElseThrow(
                        () -> new IllegalArgumentException("IPL Team not found with - " + type));
    }
}