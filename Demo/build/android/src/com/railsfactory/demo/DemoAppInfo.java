package com.railsfactory.demo;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.titanium.util.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public class DemoAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public DemoAppInfo(TiApplication app) {
		TiProperties properties = app.getAppProperties();
					
		properties.setString("ti.deploytype", "development");
		properties.setBool("ti.android.loadfromsdcard", true);
	}
	
	public String getId() {
		return "com.railsfactory.demo";
	}
	
	public String getName() {
		return "Demo";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "krishna";
	}
	
	public String getUrl() {
		return "http://www.railsfactory.com";
	}
	
	public String getCopyright() {
		return "2011 by krishna";
	}
	
	public String getDescription() {
		return "No description provided";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "a4ce40ee-2933-488a-b375-d11e7e726bae";
	}
}
