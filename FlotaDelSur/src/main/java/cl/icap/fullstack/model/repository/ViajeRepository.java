package cl.icap.fullstack.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.icap.fullstack.model.dto.ViajeDto;


public interface ViajeRepository extends JpaRepository<ViajeDto, Integer> {

}
