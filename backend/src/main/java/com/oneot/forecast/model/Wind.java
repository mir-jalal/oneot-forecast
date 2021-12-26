package com.oneot.forecast.model;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Getter;
import lombok.Setter;

public class Wind {
    @Getter
    @Setter
    private String name;
    @Getter @Setter
    private String direction;
    @Getter @Setter
    private String gust;
    @Getter @Setter
    @JacksonXmlProperty(localName = "speedmin")
    private String speedMin;
    @Getter @Setter
    @JacksonXmlProperty(localName = "speedmax")
    private String speedMax;

}
