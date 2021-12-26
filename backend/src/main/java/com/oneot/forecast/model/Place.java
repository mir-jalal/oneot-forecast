package com.oneot.forecast.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

public class Place {
    @Getter @Setter
    private String name;
    @Getter @Setter
    private String phenomenon;
    @Getter @Setter
    @JacksonXmlProperty(localName = "tempmin")
    private String tempMin;
    @Getter @Setter
    @JacksonXmlProperty(localName = "tempmax")
    private String tempMax;
}
