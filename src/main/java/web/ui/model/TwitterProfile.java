package web.ui.model;

public class TwitterProfile {

    private String name;
    private String handleName;
    private String followingCount;
    private String followersCount;

    public TwitterProfile(String name, String handleName, String followingCount, String followersCount) {
        this.name = name;
        this.handleName = handleName;
        this.followingCount = followingCount;
        this.followersCount = followersCount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHandleName() {
        return handleName;
    }

    public void setHandleName(String handleName) {
        this.handleName = handleName;
    }

    public String getFollowingCount() {
        return followingCount;
    }

    public void setFollowingCount(String followingCount) {
        this.followingCount = followingCount;
    }

    public String getFollowersCount() {
        return followersCount;
    }

    public void setFollowersCount(String followersCount) {
        this.followersCount = followersCount;
    }
}