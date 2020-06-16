package cl.icap.fullstack.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import cl.icap.fullstack.model.dto.Agenda_ViajesDto;


/*llevar para mi codigo con security*/

public interface Agenda_ViajesRepository extends JpaRepository<Agenda_ViajesDto, Integer> {

}
