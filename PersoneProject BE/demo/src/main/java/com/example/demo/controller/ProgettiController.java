package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Progetto;
import com.example.demo.service.ProgettiService;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProgettiController{
    
    @Autowired 
    private ProgettiService progettiService;

    @GetMapping("/projects/list")
    public Page<Progetto> getProgettiPaginatiEFiltrati(@RequestParam (required = false, defaultValue = "0") Integer page,
                            @RequestParam (required = false, defaultValue = "10") Integer size, @RequestParam(required = false) Long id_progettoInput,
                            @RequestParam(required = false) String nome_progettoInput, @RequestParam(required = false) String descrizione_progettoInput,
                            @RequestParam(required = false) String data_inizioInput, @RequestParam(required = false) String data_fineInput, @RequestParam(required = false) Integer budgetInput) {
        Pageable pageable = PageRequest.of(page, size);

        return progettiService.getProgettiPaginatiEFiltrati(id_progettoInput, nome_progettoInput, descrizione_progettoInput, data_inizioInput, data_fineInput, budgetInput, pageable);
    }

    @PostMapping("project/add")
    public void addProject(@RequestBody Progetto progetto) {

        progettiService.addProject(progetto);
    }

    @DeleteMapping("/project/delete")
    public void deleteProject(@RequestParam Long id_progetto){

        progettiService.deleteProject(id_progetto);
    }

    @PutMapping("/project/update/{id}")
    public void updateProject(@PathVariable Long id, @RequestBody Progetto progetto) {
        Progetto progettoUpdated = progettiService.getProgetto(id);

        progettoUpdated.setNome_progetto(progetto.getNome_progetto());
        progettoUpdated.setDescrizione_progetto(progetto.getDescrizione_progetto());
        progettoUpdated.setData_inizio(progetto.getData_inizio());
        progettoUpdated.setData_fine(progetto.getData_fine());
        progettoUpdated.setBudget(progetto.getBudget());

        progettiService.saveProject(progettoUpdated);
    }

    @GetMapping("/project/{id}")
    public Progetto getProgetto(@PathVariable Long id){ return progettiService.getProgetto(id); }

    @GetMapping("/projects/all")
    public List<Progetto> getAllProjects(){ return progettiService.getAllProjects(); }
}
