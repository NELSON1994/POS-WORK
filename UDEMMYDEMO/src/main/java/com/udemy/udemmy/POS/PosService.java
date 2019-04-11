package com.udemy.udemmy.POS;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PosService {


   private static  List<Pos> pos = new ArrayList();
    private static int idCounter=0;

static {

    pos.add(new Pos( ++idCounter, "458pos78", "NELSON", "0718826344", "INGENICO", new Date()));
    pos.add(new Pos( ++idCounter, "456pos45", "VICTOR", "0718834555", "INGENICO",new Date()));
    pos.add(new Pos( ++idCounter, "345pos11", "KEROULE", "0700026344", "INGENICO", new Date()));
    pos.add(new Pos( ++idCounter, "908pos65", "EMMACULATE", "0718878955", "INGENICO",new Date()));
    pos.add(new Pos( ++idCounter, "458pos75", "NELSONBNM", "0718826344", "INGENICO", new Date()));
    pos.add(new Pos( ++idCounter, "456pos45", "VICTOR", "0718834555", "INGENICO",new Date()));
    pos.add(new Pos( ++idCounter, "349pos15", "KEROULE", "0700026344", "INGENICO", new Date()));
    pos.add(new Pos( ++idCounter, "908pos62", "EMMACULATE", "0718878955", "INGENICO",new Date()));
}

    public List<Pos> findAll() {
    return pos;
    }

    public Pos deleteById(Long id){
    Pos p=findById(id);
    if(p==null){
        return null;
    }
    if(pos.remove(p)) {
        return p;
    }
    return null;
    }

    public Pos findById(Long id) {
    for(Pos pr:pos){
if(pr.getId()==id){}
return pr;
    }

    return null;
    }

    //service for updating the pos

    public void update(Pos p){
        pos.add(p);
    }

    //creating new pos

    public Pos save(Pos p){

    p.setId(++idCounter);
    pos.add(p);
    //p.setSerialnumber(p.getSerialnumber());
   // p.setOwner(p.getOwner());
   // p.setContact(p.getContact());
   // p.setManufacturer(p.getManufacturer());
    //p.setDate(p.getDate());

    return null;
    }

}
