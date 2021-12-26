package com.oneot.forecast.model;


import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

public class Forecasts {

    @Getter
    @Setter
    @JacksonXmlElementWrapper(useWrapping = false)
    private ArrayList<Forecast> forecast;

    Forecasts(){
        forecast = new ArrayList<>();
    }
}
