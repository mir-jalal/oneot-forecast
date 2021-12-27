package com.oneot.forecast.controller;

import com.oneot.forecast.model.Forecast;
import com.oneot.forecast.service.ForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping(value="/",produces = "application/json; charset=utf-8")
public class ForecastController {

    ForecastService forecastService ;

    @Autowired
    ForecastController(ForecastService forecastService){
        this.forecastService = forecastService;
    }

    @GetMapping
    public ArrayList<Forecast> getForecast() throws IOException {

        return this.forecastService.getForecasts().getForecast();
    }
}
