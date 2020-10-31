package com.restfulwebservices.diary.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.restfulwebservices.diary.entity.Diarys;



//@CrossOrigin(origins="*")
public interface DiarysRepository extends JpaRepository<Diarys, Long> {


}
