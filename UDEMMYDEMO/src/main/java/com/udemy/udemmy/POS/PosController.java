package com.udemy.udemmy.POS;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PosController {
    @Autowired
    private PosService posService;
    @GetMapping("/hello")
public  ResponseEntity<Object> HelloWorld(){
        Map<String, String> response = new HashMap<>();
        response.put("message", " hello nelson ");
    return new ResponseEntity<> (response, HttpStatus.OK);
}
//LISTING ALL POS
    @GetMapping("/pos/ALLPOS")
public List<Pos> getAllPos(){
return posService.findAll();

}

// gEtting a specific POS
    @GetMapping("/pos/retrieve/{id}")
    public Pos getPosById(@PathVariable("id") Long id){
        return posService.findById(id);

    }
//DELETING A POS
@DeleteMapping("/pos/delete/{id}")
    public ResponseEntity <Void> deletePos(@PathVariable("id") Long id){
      Pos pp=posService.deleteById(id)  ;
      if(pp!=null){
          return ResponseEntity.noContent().build();
      }
return ResponseEntity.notFound().build();
}

//CREATING A POS
@PostMapping("/pos/createPos")

       public void save(@RequestBody Pos p) {
        posService.save(p);

}

//updating pos
@PutMapping("/pos/update/{id}")
    public ResponseEntity<Object> update( @RequestBody Pos pos, @PathVariable("id")int id){
        pos.setId(id);
        posService.update(pos);
        Map<String,String> res= new HashMap<>();
        res.put("mes","updated successfully");
        return  new ResponseEntity<>(res,HttpStatus.OK);
}


    }

