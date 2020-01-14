# -*- coding: utf-8 -*-
puts "****年**月**日"
print "西暦を入力してください >"
year = gets.chomp.to_i
j = year / 100
k = year % 100

puts " "
puts year.to_s + "年**月**日"
print "月を入力してください >"
month = gets.chomp.to_i

if month == 1
  m = 13
  year2 = year - 1
  j2 = year2 / 100
  k2 = year2 % 100

  puts " "
  puts year.to_s + "年" + month.to_s + "月**日"
  print "日を入力してください >"
  q = gets.chomp.to_i

  puts " "
  puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日"
  puts " "
  puts " "

  s1 = ((m.to_i + 1) * 26 / 10).to_i
  s2 = (k2 / 4).to_i
  s3 = (j2 / 4).to_i

  h = (q + s1 + k2 + s2 + s3 - 2 * j2) % 7

  if h == 0
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は土曜日でした。"
  elsif h == 1
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は日曜日でした。"
  elsif h == 2
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は月曜日でした。"
  elsif h == 3
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は火曜日でした。"
  elsif h == 4
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は水曜日でした。"
  elsif h == 5
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は木曜日でした。"
  elsif h == 6
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は金曜日でした。"
  end

elsif month == 2
  m = 14
  year2 = year - 1
  j2 = year2 / 100
  k2 = year2 % 100

  puts " "
  puts year.to_s + "年" + month.to_s + "月**日"
  print "日を入力してください >"
 q = gets.chomp.to_i

  puts " "
  puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日"
  puts " "
  puts " "

  s1 = ((m.to_i + 1) * 26 / 10).to_i
  s2 = (k2 / 4).to_i
  s3 = (j2 / 4).to_i

  h = (q + s1 + k2 + s2 + s3 - 2 * j2) % 7

  if h == 0
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は土曜日でした。"
  elsif h == 1
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は日曜日でした。"
  elsif h == 2
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は月曜日でした。"
  elsif h == 3
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は火曜日でした。"
  elsif h == 4
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は水曜日でした。"
  elsif h == 5
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は木曜日でした。"
  elsif h == 6
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は金曜日でした。"
  end

else
  m = month

  puts " "
  puts year.to_s + "年" + month.to_s + "月**日"
  print "日を入力してください >"
  q = gets.chomp.to_i

  puts " "
  puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日"
  puts " "
  puts " "

  s1 = ((m.to_i + 1) * 26 / 10).to_i
  s2 = (k / 4).to_i
  s3 = (j / 4).to_i

  h = (q + s1 + k + s2 + s3 - 2 * j) % 7

  if h == 0
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は土曜日でした。"
  elsif h == 1
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は日曜日でした。"
  elsif h == 2
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は月曜日でした。"
  elsif h == 3
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は火曜日でした。"
  elsif h == 4
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は水曜日でした。"
  elsif h == 5
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は木曜日でした。"
  elsif h == 6
    puts year.to_s + "年" + month.to_s + "月" + q.to_s + "日は金曜日でした。"
  end
end
