package com.justkeepgoingv2;

import com.facebook.react.ReactActivity;

// react-navigation need
import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "justKeepGoingV2";
  }

  // react-navigation need it to run in android
  @Override
  protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}
