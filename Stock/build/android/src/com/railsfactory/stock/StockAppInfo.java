package com.railsfactory.stock;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public class StockAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public StockAppInfo(TiApplication app) {
		TiProperties properties = app.getAppProperties();
					
		properties.setString("ti.deploytype", "development");
		properties.setBool("ti.android.loadfromsdcard", true);
	}
	
	public String getId() {
		return "com.railsfactory.stock";
	}
	
	public String getName() {
		return "Stock";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "krishna";
	}
	
	public String getUrl() {
		return "www.railsfactory.com";
	}
	
	public String getCopyright() {
		return "2011 by krishna";
	}
	
	public String getDescription() {
		return "No description provided";
	}
	
	public String getIcon() {
		return "default_app_logo.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "245bad4c-0daf-444b-a472-0ab54d6cddb1";
	}
}
