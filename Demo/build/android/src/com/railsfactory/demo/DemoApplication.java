package com.railsfactory.demo;

import org.appcelerator.titanium.TiApplication;

public class DemoApplication extends TiApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		
		appInfo = new DemoAppInfo(this);
	}
}
