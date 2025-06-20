import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const Dashboard = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Header text="Hi, John Doe" />
          <Text style={styles.subText}>Have you track your money today?</Text>
        </View>
        <Image source={require('../../assets/pic.png')} style={styles.avatar} />
      </View>

      <Gap height={30} />

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceTitle}>Your Balance</Text>
        <Text style={styles.balanceAmount}>Rp. 10.000.000</Text>
        <View style={styles.line} />
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Cash on Hand</Text>
          <Text style={styles.balanceValue}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceLabel}>Cash on Bank</Text>
          <Text style={styles.balanceValue}>Rp. 6.000.000</Text>
        </View>
      </View>

      <Gap height={40} />

      <View style={styles.transactionContainer}>
        <Text style={styles.transactionTitle}>Add Transaction</Text>
        <Gap height={16} />
        <Button text="Cash On Hand" />
        <Gap height={16} />
        <Button text="Cash On Bank" />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTextContainer: {
    flex: 1,
  },
  subText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 16,
    marginLeft: 12,
  },
  balanceContainer: {
    marginTop: 8,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    marginBottom: 10,
    color: '#000000',
  },
  line: {
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 8,
    marginHorizontal: 2,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  balanceLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  balanceValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  transactionContainer: {
    marginTop: 24,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
});
