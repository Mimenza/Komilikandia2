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
import modelo.dao.ModeloComic;
/**
 * 
 * @author byend
 *
 */
@WebServlet("/ApiComics")
public class ApiComics extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ApiComics() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		/**
		 * Mcomic sortzen du eta comic beteko den arraylist bat, ondoren getall metodoa deitzen dio eta datorren comic guztiak jsonString bariablean gordetzen dira , eta berriro out.print eta flush.ekin 
		 * bidaltzen dira
		 * 
		 */
		
		ModeloComic mComic = new ModeloComic();
		ArrayList<Comic> comics = mComic.getAll();

		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");

		String jsonString = JSONStringer.valueToString(comics);

		PrintWriter out = response.getWriter();
		out.print(jsonString);
		out.flush();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}