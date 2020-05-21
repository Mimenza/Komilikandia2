package api;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONStringer;

import modelo.bean.Comic;
import modelo.bean.Genero;
import modelo.dao.ModeloComic;
import modelo.dao.ModeloGenero;

/**
 * Servlet implementation class ApiGeneros
 */
@WebServlet("/ApiGeneros")
public class ApiGeneros extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public ApiGeneros() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ModeloGenero mGenero = new ModeloGenero();
		ArrayList<Genero> generos = mGenero.selectAll();

		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");

		String jsonString = JSONStringer.valueToString(generos);

		PrintWriter out = response.getWriter();
		out.print(jsonString);
		out.flush();
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
