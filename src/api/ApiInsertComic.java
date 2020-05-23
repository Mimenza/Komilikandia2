package api;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import modelo.bean.Comic;
import modelo.bean.Genero;
import modelo.dao.ModeloComic;



/**
 * 
 * @author byend
 *
 */
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
		
		/**
		 * Apia comic jsona jasotzen du, object bat bihurtzen du eta comic berri bat sortzen du eta objetuaren datu guztiak han gordetzen ditu , berdina generoarekin, ondoren modeloComic sortzen du eta insert metodoari 
		 * deitzen dio comic pasatzen .
		 * 
		 */
		
//		datuak jaso
		request.setCharacterEncoding("UTF-8"); //enieak eta ondo irakurtzeko
		String jsonComic = request.getParameter("comic");
		
		
		
		System.out.println(jsonComic);
		JSONObject jsonObject = new JSONObject(jsonComic);
		
//		komiki objektua sortu
		
		Comic comic = new Comic();

		Date fecha_publicacion =null;
		
		SimpleDateFormat sdt = new SimpleDateFormat("yyyy-MM-dd");
		
		try {
			
			fecha_publicacion = sdt.parse(jsonObject.getString("fecha_publicacion"));
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		comic.setFecha_publicacion(fecha_publicacion);

		Genero genero = new Genero();
		
		genero.setId(jsonObject.getInt("genero_id"));
		
		comic.setGenero(genero);
		
//		comic.setId(jsonObject.getInt("id"));
		comic.setImagen(jsonObject.getString("imagen"));
		comic.setNombre(jsonObject.getString("nombre"));
		comic.setNum(jsonObject.getInt("num"));
		comic.setNum_likes(jsonObject.getInt("num_likes"));
		comic.setTitulo(jsonObject.getString("titulo"));

		
		
		ModeloComic mComic = new ModeloComic();
		
		//if(!mComic.exist(comic.getTitulo())){   //exist 
			//balidazioa ok

			mComic.insert(comic);
			
			try {
				mComic.getConexion().close();
				response.sendRedirect("ApiComics");
			} catch (SQLException e) {
				System.out.println("Errorea conexioa ixtean");
				e.printStackTrace();
			}
			
			response.setHeader("Access-Control-Allow-Origin","*"); //jsonp deia denean ez da behar
			response.setCharacterEncoding("UTF-8");
			
	//	}else {//balidazioa NOK
//			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		//	response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Balidatzean errorea");
	//	}
		
	}
}

