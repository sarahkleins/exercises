# Instructions 

# Given a string write a program to convert it into lowercase.

# Sample code to read in test cases:

# HELLO CODEEVAL - hello codeeval
# This is some text - this is some text

# Sample code to read in test cases:
def lowercase(str)
  str.downcase
end

File.open(ARGV[0]).each_line do |line|
    puts lowercase(line)
end