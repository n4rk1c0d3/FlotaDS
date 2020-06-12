package cl.icap.fullstack.controller;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import cl.icap.fullstack.model.dto.ValoresDto;
import cl.icap.fullstack.service.ValoreService;

@Controller 
@RequestMapping(value="/valores")
public class ValoresController {

	@Autowired
	ValoreService valoreService;
	
	
	@RequestMapping(value="/list")
	public @ResponseBody List<ValoresDto> ajaxList(HttpServletRequest req, HttpServletResponse res) {
		return valoreService.list();
	}

	@RequestMapping(value="/get")
	public @ResponseBody ValoresDto ajaxGet(HttpServletRequest req, HttpServletResponse res) {
		return valoreService.get(Integer.parseInt(req.getParameter("tramo_id")));
	}
	
	@RequestMapping(value="/insert")
	public @ResponseBody int ajaxInsert(HttpServletRequest req, HttpServletResponse res) {
		int rows=0;
		
		String requestData;
		try {
			requestData = req.getReader().lines().collect(Collectors.joining());
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			ValoresDto valoresDto = gson.fromJson(requestData, ValoresDto.class);
			valoresDto = valoreService.insert(valoresDto);
			
			if(valoresDto == null) {
				rows=0;	
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
			return rows;
			
		}	
		
	
	@RequestMapping(value="/update")
	public @ResponseBody int ajaxUpdate(HttpServletRequest req, HttpServletResponse res) {
		int rows=0;
		
		String requestData;
		try {
			requestData = req.getReader().lines().collect(Collectors.joining());
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			ValoresDto valoresDto = gson.fromJson(requestData, ValoresDto.class);
			valoresDto = valoreService.update(valoresDto);
			
			if(valoresDto == null) {
				rows=0;	
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
			return rows;
			
		}	
		
		
	@RequestMapping(value="/delete")
	public @ResponseBody int ajaxDelete(HttpServletRequest req, HttpServletResponse res) {
		int rows=0;
		
		try {
			ValoresDto valoresDto = new ValoresDto();
			valoresDto.setTramo_id(Integer.parseInt(req.getParameter("tramo_id")));
			valoreService.delete(valoresDto);
			rows=1;
		} catch (Exception e) {
			e.printStackTrace();
		}
			return rows;
			
		}	
		
	
}

