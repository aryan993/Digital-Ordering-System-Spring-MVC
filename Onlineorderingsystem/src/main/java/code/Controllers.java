package code;



import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class Controllers {
	
	public String orders;
	public int count=0;
	
	@RequestMapping("userviews")
	public String userview() {
		return "indexpage";
	}
	
	@RequestMapping("userside")
	public String userside() {
		return "orderpage";
	}
	
	@RequestMapping("validateEmail")
	public @ResponseBody String validateEmail(@RequestParam("ask") String order) {
		count++;
		orders=order;
		String msg = "";
		System.out.println(orders);
		return msg;
	}
	
	
	@RequestMapping("sellerside")
	public String orderlis(ModelMap model) {
		model.addAttribute("orders",orders);
		return "sellerside";
	}
}
