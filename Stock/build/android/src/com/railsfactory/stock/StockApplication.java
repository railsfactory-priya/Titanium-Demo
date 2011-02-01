package com.railsfactory.stock;

import org.appcelerator.titanium.TiApplication;

public class StockApplication extends TiApplication {

	@Override
	public void onCreate() {
		super.onCreate();
		
		appInfo = new StockAppInfo(this);
	}
}
