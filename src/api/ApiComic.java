package api;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import modelo.bean.Comic;
import modelo.dao.ModeloComic;
/**
 *    
 * @author byend
 *
 */
@WebServlet("/ApiComic")
public class ApiComic extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ApiComic() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		/**
		 * Atal honetan apiari id bat etortzen zaio, modelo comic bat sortzen du ,eta mComic.get deitzen dio eta id-a pasatzen dio , ondoren jasotzen duena 
		 * jsonString bariablean gordetzen du eta outprint eta flush ekin json-a bidaltzen du
		 */
		
		int id = Integer.parseInt(request.getParameter("id"));

		ModeloComic mComic = new ModeloComic();
		Comic comic = mComic.get(id);

		JSONObject jsonObject = new JSONObject(comic);
		String jsonString = jsonObject.toString();

		PrintWriter out = new PrintWriter(new OutputStreamWriter(response.getOutputStream(), "UTF8"), true);

		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");

		out.print(jsonString);
		out.flush();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}