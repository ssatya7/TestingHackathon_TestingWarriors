package utils;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public interface Logging {

    default public Logger getLogger() {
        return LogManager.getLogger(this.getClass());
    }
}