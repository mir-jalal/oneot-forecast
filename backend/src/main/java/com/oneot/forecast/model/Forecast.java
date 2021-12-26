package com.oneot.forecast.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

public class Forecast {

    @Getter @Setter
    @JacksonXmlProperty(isAttribute = true)
    private String date;
    @Getter @Setter
    private Day day;
    @Getter @Setter
    private Night night;

    private static class DayNight{

        @Getter @Setter
        String phenomenon;
        @Getter @Setter
        @JacksonXmlProperty(localName = "tempmin")
        String tempMin;
        @Getter @Setter
        @JacksonXmlProperty(localName = "tempmax")
        String tempMax;
        @Getter @Setter
        String text;
        @Getter @Setter
        String sea;
        @Getter @Setter
        String peipsi;
        @Getter @Setter
        @JacksonXmlElementWrapper(useWrapping = false)
        ArrayList<Place> place;
        @Getter @Setter
        @JacksonXmlElementWrapper(useWrapping = false)
        ArrayList<Wind> wind;

        DayNight(){
            place = new ArrayList<>();
            wind = new ArrayList<>();
        }
    }

    private static class Day extends DayNight{
        Day() {
            super();
        }
    }

    private static class Night extends DayNight{
        Night() {
            super();
        }
    }
}
