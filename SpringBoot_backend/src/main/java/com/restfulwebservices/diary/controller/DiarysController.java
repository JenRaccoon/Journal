package com.restfulwebservices.diary.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.restfulwebservices.diary.entity.Diarys;
import com.restfulwebservices.diary.repository.DiarysRepository;


//@CrossOrigin(origins="*")
@RestController
public class DiarysController {

	@Autowired
	private DiarysRepository diarysRepository;
		@GetMapping("/jpa/diarys")
			public List<Diarys> getAllTodos(){
			return diarysRepository.findAll();
	}

		@GetMapping("/jpa/diarys/{id}")
		public Diarys getDiary(@PathVariable long id){
			return diarysRepository.findById(id).get();
		}
		//delete -> 204 no content 
		@DeleteMapping("/jpa/diarys/{id}")
		public ResponseEntity<Void> deleteTodo(@PathVariable long id){
			diarysRepository.deleteById(id);
			return ResponseEntity.noContent().build();
			
		}
//		//edit/update diarys -> put 200 OK
		@PutMapping("/jpa/diarys/{id}") 
		public ResponseEntity<Diarys> updateTodo(@PathVariable long id, @RequestBody Diarys diarys){
			Diarys diarysUpdated = diarysRepository.save(diarys);
			return new ResponseEntity<Diarys>(diarys, HttpStatus.OK);
		}
		
		//create a new diarys -> post 201 created 
		@PostMapping("/jpa/diarys")
		public ResponseEntity<Diarys> updateTodo(@RequestBody Diarys diarys){
			
			Diarys createdDiarys = diarysRepository.save(diarys);
			//利用ServletUriComponentsBuilder 依照/jpa/diarys  append {id} 形成完整URL 
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
					.path("/{id}").buildAndExpand(createdDiarys.getId()).toUri();

			//URI location is created 用postman test 回傳201創建成功
			return ResponseEntity.created(uri).build();
		}
}
