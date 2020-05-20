package cl.icap.fullstack.service;

import java.util.List;

import cl.icap.fullstack.model.dto.ViajeDto;

public interface ViajeService {
		public ViajeDto insert(ViajeDto viajeDto);
		public ViajeDto get(int viaje_id );
		public ViajeDto update(ViajeDto viajeDto);
		public void delete (ViajeDto viajeDto);
		public List<ViajeDto> list();

	}


