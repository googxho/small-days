import TableView from '@/component/rn-kuki-ui/TableView';
import {StyleSheet, Text, View} from 'react-native';
import {dataArray} from './data';

const KlateralScroll = () => {
  return (
    <View style={{flex: 1}}>
      <TableView
        datas={dataArray}
        stickyHeaderIndices={[2]}
        headers={
          <View>
            <Text>8888</Text>
          </View>
        }
        tableHeadLeftComponents={
          <View style={{width: 5000}}>
            <Text>666</Text>
          </View>
        }
        tableHeadComponents={
          <View style={{width: 5000}}>
            {/* <ListTitle isHasHandle titleSource={rowData?.props} />
            <ListTotal
              props={rowData?.props}
              details={rowData?.details}
              datas={rowData?.data}
              isHasHandle
              tableStore={batchStore.tableStore}
            /> */}
          </View>
        }
        renderRowSticky={(item, index) => (
          <View key={index}>
            {/* <Text style={styles.renderItem}>{item.gender}</Text> */}
          </View>
        )}
        renderRow={(item, index) => (
          <View style={{flexDirection: 'row'}} key={index}>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
            <Text style={styles.renderItem}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default KlateralScroll;

const styles = StyleSheet.create({
  renderItem: {
    width: 100,
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
