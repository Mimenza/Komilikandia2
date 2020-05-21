package api;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import modelo.bean.Comic;
import modelo.bean.Genero;
import modelo.dao.ModeloComic;




@WebServlet("/ApiInsertComic")
public class ApiInsertComic extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public ApiInsertComic() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//datuak jaso
		int id = Integer.parseInt(request.getParameter("id"));
		String nombre = request.getParameter("nombre");
		String titulo = request.getParameter("titulo");
		int num = Integer.parseInt(request.getParameter("num"));
		
		Date fecha_publicacion = null;
		SimpleDateFormat formato = new SimpleDateFormat("yyyy/MM/dd");
		try {
			fecha_publicacion = formato.parse(request.getParameter("fecha_publicacion"));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		String imagen = request.getParameter("imagen");
		int num_likes = Integer.parseInt(request.getParameter("num_likes"));
		int genero_id = Integer.parseInt(request.getParameter("genero_id"));
		
		
		//sortu aktibidade objektu bat
		Comic comic = new Comic();
		//jasotako datuekin setak egin
		comic.setId(id);
		comic.setNombre(nombre);
		comic.setTitulo(titulo);
		comic.setNum(num);
		comic.setFecha_publicacion(fecha_publicacion);
		comic.setImagen(imagen);
		comic.setNum_likes(num_likes);
		
//		comic.setGenero(genero);
	
		
		//modeloa sortu
		ModeloComic mComic = new ModeloComic();
		//inserta egin
		mComic.insert(comic);
		
		//VerComics kontrolatzaileari deitu
		response.sendRedirect("ApiComics");
  }

}