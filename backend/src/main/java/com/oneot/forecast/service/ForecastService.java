package com.oneot.forecast.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.oneot.forecast.model.Forecast;
import com.oneot.forecast.model.Forecasts;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.stereotype.Service;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

@Service
public class ForecastService {
    private static final String FORECAST_URL = "http://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng";
    private static final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36";

    public Forecasts getForecasts() throws IOException {
        XmlMapper xmlMapper = new XmlMapper();
        String xml = inputStreamToString(new FileInputStream(getXmlFile()));
        return xmlMapper.readValue(xml, Forecasts.class);
    }

    public String inputStreamToString(InputStream is) throws IOException {
        StringBuilder sb = new StringBuilder();
        String line;
        BufferedReader br = new BufferedReader(new InputStreamReader(is, StandardCharsets.ISO_8859_1));
        while ((line = br.readLine()) != null) {
            sb.append(line);
        }
        br.close();
        return sb.toString();
    }

    File getXmlFile() throws IOException{

        File file = new File("currency.xml");

        URL url = new URL(FORECAST_URL);
        HttpURLConnection myURLConnection = (HttpURLConnection)url.openConnection();
        myURLConnection.setRequestProperty("User-Agent", USER_AGENT);

        InputStream input = myURLConnection.getInputStream();

        try(OutputStream output = new FileOutputStream(file)){
            IOUtils.copy(input, output);
        }

        return file;
    }
}
