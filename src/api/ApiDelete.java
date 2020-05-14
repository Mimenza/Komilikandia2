package api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.dao.ModeloComic;

/**
 * Servlet implementation class ApiDelete
 */
@WebServlet("/ApiDelete")
public class ApiDelete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public ApiDelete() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int id=Integer.parseInt(request.getParameter("id"));
		
		ModeloComic mComic = new ModeloComic();
		mComic.delete(id);
		try {
			mComic.getConexion().close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
