import React from 'react';
import {SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

/**
 * BaseLayout UI Component - Renders BaseLayout for all screens
 * @returns {React.FC<{}>} - Returns React.FC component of BaseLayout
 */
interface BaseLayoutProps {
  children: any;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({children}): JSX.Element => {
  return (
    <SafeAreaView style={styles.safeView}>
      <LinearGradient
        colors={['#eb5862', '#702453']}
        style={styles.linearGradient}>
        <View style={styles.containerView}>{children}</View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default BaseLayout;
