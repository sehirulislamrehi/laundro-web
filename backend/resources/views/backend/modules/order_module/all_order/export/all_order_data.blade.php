

<table>

     <tr>
          <th>Order No</th>
          <th>Customer Name</th>
          <th>Customer Phone</th>
          <th>Customer Address</th>
          <th>Order Status</th>
          <th>Payment Status</th>
          <th>Collection</th>
          <th>Delivery</th>
          <th>Order Total</th>
     </tr>

     @foreach( $datas as $data )
     <tr>
          <td>{{ $data->order_no }}</td>
          <td>{{  $data->name }}</td>
          <td>{{  $data->phone }}</td>
          <td>{{ $data->address_details }} - {{ $data->location }} ( {{ $data->address_type }} )</td>
          <td>{{ $data->order_status }}</td>
          <td>{{ $data->payment_status }} ( {{ $data->payment_method }} )</td>
          <td>{{ $data->order_date }}</td>
          <td>{{ $data->delivery_date }}</td>
          <td>{{ $data->total }} BDT</td>
     </tr>
     @endforeach

</table>