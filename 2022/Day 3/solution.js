// Split the string into an array
splitByLine = (str, delim) =>
  (str.split(delim));

// Draw a map
valuesMap = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
  A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45, T: 46, U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
}

// Remove duplicate characters in the array values
removeDupChar = (arr, index, subindex) =>
  (Object.values(arr[index][subindex]).filter((v, w, x) => x.indexOf(v) === w).join(``));
removeDupChar1 = (arr, index) =>
  (Object.values(arr[index]).filter((v, w, x) => x.indexOf(v) === w).join(``));

// Search nested array objects for shared characters
findSharedChar = (arr, index, subindex) => {
  for (n = 0; n < 128; n++) { // I was too lazy to check the actual length of the objects
    let charReference = (arr[index][subindex + 1].charAt(n));
    resultsArray.push(arr[index][subindex].search(charReference) >= 0 ? charReference : null);
  }
}

// Import values as string
const valuesString = `WVHGHwddqSsNjsjwqVvdwZRCbcJcZTCcsZbLcJJsCZ
hngprFFhFDFhrDpzzQDhtnBJJRJZbZvTcvbfRCJfBRcBJl
DmptngtFwvvMmwmm
HFddrJnLdqtHBMQBmmVm
gbvNsbhsvQtmZTbQPT
vDshDlczcDhcssscwzQwslLJrSJLpqrrzpnCrSfLSnqq
pDGQDSpFDGzFDQSJqzDhjhQMTjTrwTstbTBTjTtLtbTMBT
zgzVNHHgMwMLbLNB
WRWPgdHCZccggJmJGzJmzGhGCD
sVJNlhldShpdpnnwVnwCwtwggt
WLFFcHWQLPPZQCgtnCgmbtbHwt
MPLWzRMMcGgRrWNDpSSSfDflMlTd
BBMZJcgBRjCZZzBpSvHQvbLvvHCQLQ
VlVTFwDTVGnfWSQPtsDPbvrpDS
wWdqhWlwGVfGwlfTVqFWfWWjzZZBJmMZMNdzZJMpjzNjgJ
FBWFphQBmDmpmMSpDWVcVcvsPcRbrjPMcMsr
HHtdnHnwNCHCTJRTPTzrbvVbcVRr
lHqHwlnlqnGCNGGmWDvvZfpZvG
mfVtmPtsccMmHcHCFfmhVmnpgZLbWPZqWnpqZbZWpgPW
zzvwBrzdQDvpZJfQJZJpLf
BrTBwRdNcfNmfStc
sTlhFLfZTTLcfsLlLDZflvQvRNqRJFNvRMRNvQQRBQ
CWcgwStWwCWWwvgNQvJBvQMQRB
wptGzbzGWVGSCVVlVlLDcVVsfhLTlf
HVnMVGwLLbsGnVsLnwLSBggMhjmgmgmhtmqhtgMhMj
zrZzJRZfzZfrPCrFcWccPdTdHHlvdmlgTghCtmtTgq
NFfcZWWzZrrHLBpBBGVGNG
HqFhhCBCBLmwwCqJCHFvvFdcprrrSSrjRFRjpgrggb
VGzWtQzGGQPVtlVNslVWsPdRpmcRrjpSzcrcbdSmSnSg
WPPGllQMPGmTLvLJBCwM
PvDWRSmTVvSvRhbZRpRpbjjjzM
GBFGHLglHrrrLgGrttbMjpbcpcZJBsBp
lrHgrrndgdNnlHGFQPMMmWPTvvWSCDQn
mmhQShhmhQfzNfTTlShbHJrRtltltJJtHlRLLZ
WscggNqwPWjcGcWWcpNcRJHHprZvZHrvtttZJpJr
jGjgcMGCwPNsGDCcszBfhhQQQDnFnTVVBV
mcGjrwzQcrZtQzZQDZcPssvPVVCPCVLwswwPBC
NJbqHddNSgdPWvvsVHVLPs
NqglNSlJFNSbSNdldNlNdNbTRFDrvRmQrQGtmDrvttQmmtDj
zzcBPnHBjgHjWJvbJQTvScbwcQ
qdspVCFqVqfFqLFCqtpTwtpTbSTbJpwBST
FRLFRCNNqMfdWNmZPBPZrHmm
VmtRRJmtrDrwhRcvPspltvgqtqsd
WGQBZzMMBGBGbZTTWWCMNSgggqnPlsfbqndndccglffg
CWQQZMFWdzMQdJJwJVFrwmmmRw
rZsFfGfNhznzsjhzZfVjGVvVdvSTSJHSDDtcmmmttC
wWpRBWlbWMWlQDvCcRSvJRSStm
LPlwWqbgwqjjcFshNf
lsppsGphmPrRQnvHdRpd
qBgjLqMjgjTLPnzHPrPRLnzv
gSMfNjNtttVbqBbtTSStjTqlhmlZDsDsbWZWFFFsGhlWPm
sPDPDzrGzBsGRsbwrjtSVvthVfQtQw
ClpgFZgNqMWCgqCpMNZqNWmNdtSwtljtVHQhtwfvdHtSdhSj
FpNCJpNcpfCpgNWPGBLcbTGTzTzPnG
mssNLCZqSqmNCHmrqHChJTjTjnRRnnqVnTTGngGTRn
dbwptFwQbvdtcvpZDcDddgzGPjTGgpPTRpzzzgRzTn
BwZdtZldDbrSsNrsrSHl
MLnFWMRWpnpnLnLCmPGTqQsFzBttTQ
SwNlDHNcddglSDBjrqmqGQqqmGtGGwszPP
vdSlNcrvvvnBMbBR
psZPRmTpRpgrlrDRBFgV
jvCqNhwnjhGNqCMqVgFHWtgHBrtwHFrJ
cGvbNcjvvhhjcvbQGcZdZSQpzdpmpPVpdZpd
drTHDdlHzllZDTzTQRQLsPPSsBbSjQdL
MfVVWmNvMnqNmVVpMMgfgMmvBFFfRRLQPPsPfsFLFCFRSFjR
whMnNVnqWmlllHswJTZT
ZSQTTLLlTsbmmDZlmNQSNFfPwHwqCjCCfjwFPwfwLr
MctMJMBVttnhJcBBVctwRHjHRJwJwjFfqPfRwj
vzqgqhBVzzTlZmmTlN
WgvlHJFvljvdBmzcvcwpmchc
TQqZsTZttLZbRZsLLMzzppBmNShCmBNTcNCN
LPMZsMZLMQVgglFPhFHlFl
qsBCPVPqVbwfnMQNmZJnqJgR
hHdrvvLWtvtjWQnZJTMrmpTZgN
DShSShLZdFGPGDPGsPsG
qRBddRzFFqFqHnNnPSnnmmSpgpJm
ssZDQMvvMwppNJWRDRpW
MMvwlsRMcQBjcLqLBBqc
ZGHpwFGvwpHrvfFTMtDfccMjntMntc
RgSCLRLJRSRSQQqJmTDMPMTtsJjnclBjtj
LVmmSSddLCwVHDbzDzZr
psgWdsBjnnJjbZWQDDLNrDcrLVQjLM
zPSCCHqCfqfmWNMcrVSLRM
TPHzWPFTGztqTGgdJdsssvZgwb
gcFgBChcClJjNCPb
sWZdZdrSmWmSZRwSmsvPlsTtTtNMnnlvnJJv
GSWrHZdGQpRrrSGmpWQmQfLfpVzDfghppzBVLBlBqg
BFNqFzBNhqVwmTtsqVst
dMwMwMfCMWbDtDvDssCC
ldMwMSHHMMWJpRpPLLpBzPZjgnZPhN
WczRJhcWggVBdzPPLnCjdvjm
lSpSTpTSsCCmmntNdp
wSFDCTwsGDqQqQVWWcJw
RqPqhDGBhRDrrhBFmPmbgssZbwbgCbwsmZsQ
nCtjMppjfTpjJJfVZwtzZtllLZwLss
MHfpMWdHpSCSfnSTJWhDDFDFBGqDGvvDBDFd
MCCGMCSHVGNTspVWQznddndg
rttLtvRbrhLZrbcQdJnnQdfddsrggf
BbRqltRtHsNNllNC
ncFpcsLLdFmWlRmnllTR
bMMVzVqMzjNVDblmRTPGlSmmPlqG
gNDDJMVZNCbNJNDNQCbZCbscvBsdBvrRHfcpdQpfFFff
VnWFbZvFbHWhFjZWVJZJLZFWTttpMCspQTTzQCHpgQMgztzT
dGcfdNdGrlRlBDGNSllfBMspgzmTgtQQgztMtzpmcT
lBNdqRsBRdfPNrLPFVVPVJPZZvhj
TLWgggJzwjgWgjgGnnmQnzQfNNNQsm
SpPbBlPBMlvFZpbbBmQGsmCJmCstsdNGBQ
MhSHhZPrPbvSFrJPpPMSbMcLjjqTLHDRTDDTTLDLTqgH
fprRRbbznFbcQVPDdQPdFV
LTvmsLmcsHmvDvSZDZVVSS
jWtmLccssJTLjHmLWWJwnwlBfwnBbllpCBnffbBr
plPBWzbnFLPPtGqMMwlMGwmS
ZQjDHjrQjdjVFwdMvCSfmwMqdt
DDhhrRDjQghHJjhWBbgbTccbsTzpWF
vgCbbwsTbWWWgwBWDGGDqtPGtMgGlFMH
znrznJNhLSLphRRRDlFPMmpFPjjHtMFF
llNcSQVSNcRbvCwwWcTdwZ
qpnJbnRRnJhRFhFHRgQSzHlSRHCCCg
fMBttBvsBjffvsQTtfGTWlCWsSgSmHCzZmLlHgzZ
ffMdjrfdwjfwwnhJPFchhqwQ
NCVSTCVCQCCRVDQSJsqFPsPNspFhhsgjPh
btvtWtcWnpgmFhjmmt
cfnffBfcWcrMdbvMQJDDrDTDVCpCDrGD
fZNhBWFSlFQFjWQTTldHgCwvTvqqdr
zznVzCznmHvnwgdH
PMMbCGPMDPcLbJhFhWhBhRScQZBQ
WQMrDWGHbSWHMNrTQRhghmgPZccmqDLwPqPg
svCzfpdzzdsnslCsnPZcHZPlJcqZgmqPPc
nntVpdpVsfjCHzvnsCzRTBrtWGbNNQSMbTNSRr
SnpDQdBqGpDSBMfQGcMQBDJPNstvJcWNsPJCtJtNRWPC
VrVHrhTHlPHTvvNtbhNRNswC
TzlFHHmrVlgTlTGSzGqpdMGBPQBS
zrCDnrDVCnCgnrHgGDnVVCZsNttQZmjtsmbMqGqsjbqj
TlRRWPSwwFwbSwTTTpNQQqNjqZZlmMMQQt
wvbwbRTLWdFFwvRBTbvTTRzrnznnJrDDCzBczBfHCJnz
SvTdmLNNNdvTBmvmLvSvDpgczzjfgjggpcjcNPzD
VJHQsJVlHpjjpzsjzP
VRlJbJQrVbVHJJPMhBdnBRCSLZZZnvnLvv
tMGcpGtMtLtsCGspLzNCBBmwCzQRzBBRWQ
hdlHFllDdZgDbDDlDHTWWTnzBBBvzmNHzwRz
FSddDlFRqDFqFSdPVqdhcfGMsVtVfLjrfGfjtMcs
RGMWnBMWfCCMBHTDptJJgZStRPmSRD
bqzFqjqcFLNLZZSmpSBgZZ
rFrQNbNBlNcbrQlNQvvclMswTCTCnwrwHrWGsGCswn
WLhJQddCQwRNCQNHczHNzMvZcZvcNc
SlSpSlrpDqnbqDjlGjGGljTjMZZPPMMfVPgfHMMVgVvqfgcw
SbGsDspbbnjTjBldCFmLwFCJLBmtJB
TMDjMvMqMvDTzcmFCgrJCr
ZZZJSZWVBHZWSSZQJhVhWnHJwczGGwGcCCFzwgmzcwFgwVzc
pLHNQSnNJsMLRJds
TsLZGwdsDFWHBZJFfZ
mqhRvqrzJRbmzJBFfgHHgWgHrrlH
JvvNhJmvtDdsNTwdLV
wwnSVSmwtbstznwgbzzVMTNpTNWdlCSlSWTffWNCSN
cFvccLGFGvvGHZflnNTpnZpZcB
GPqGDhGGqrDhVRgbnbttPmgs
rzSZJScLrcBLvjvsqMPZvjQl
nnpDqgDqFTgwqHHvMHvvvTvPMM
GnqCGpDqqVhccLmrmSmCRL
tJSTmdfddDTDJCPmbQvQLHvqqqbrbvlP
zWGsjcwwGGcVVjcGWcNjvNjQqrQtNFFQHHrF
RZnRVsswRsGWcwVBZVtBRdDJgCffTgmgfnnCpfTfTM
FnCrzhTrNPrMcnhMTnZZZNPwDPdbDmdDtwjdtjbmQwDt
sBvWrpppvLBsLRVBfHSfbbQmbwSjStDSwSwS
LVRRRJqqlHNlNTChrhMG
WNsfsstMvtMvNNGPZwmZmqZPLWZcww
rDCdDRCDFQjSVLcmZcDq
bBBHqTgBbQlQRCQFbgqdhvshGvTJMnfTtnnThnsN
VwWBTNQcVzDtrgfrtzzt
LLbpShLGvlbCmLjpGSCSCpvFdrgdddcHtrtGgfqHcDHqrd
pmvLmlpmjbLbpljJPBBcTBBQRZBBVJRZ
cVTcVTNvvghNhvggPPgtCVSpSQmzCqZDRCmDZDZS
dGJMWFsFMFWsnlzRlQzlzqpzlZzD
HdLFssFMsJbnbFjqbhPgjNggcrhg
LLVhQCTvRvmWlCppQfQQjPrwszNsfzNz
BZSgncHgnJStJHJgntMWzGsrPqGwsfPfGPwwwZ
bdBdJMBcShWCLbhWVC
vjdpGNGwSNCTwwRbfnWgQMLjQWMnLQ
DcmFPFtHmlcgpqWDnMbDLf
FZJPtcprHtPPHplZHPZclwwGBSZSvSwCwvZzNdwvvw
CdJLJCJPWPWcbtzJtqJzFrQvBhfjBBvjjvdjpFjr
sBRgsZGDNSBBRGDwphrrrThpHpgHvhpQ
DwDsGBDNwGmMNlMlMDSPmztJVCbVCCWqPqJLmW
LSTMgDSRSMHbMDWLHSvDScwtCGqGrjGrcLftqVGtVC
hzJPmlphCGrCwVrJ
zhPNdNnQZBZBhZnNZSgMWMDbMHwWSDWNDH
rcdvvcwvrHrMZBjHSZ
sDtWblgnltsDFlgFqltCCVQTMTgSHVTfSQfSHj
tDtRWFpFbWWWWNNDWsNqWvmzvhzhzGmzjjGvLwJmpc
nFSSnnbhSfgLSSnVjdjfHMgfMzGzmqlNGGmTPlqqTzTNNzlT
pBZsJJvccbBmlWGlNb
cvsssvZwsDwrDdfFgnbDfVbgng
mWRNWNCTdwdCwhCddbWWmhsZVgJQJBVBfsBsJQLQBLJb
qFFlGzFtjjcqzHtFtlRfVfsZfQHVfBHQRHgf
jqGjtcDnGnPzFRlzrnMdWrrCMMddNNWT
MHWCjjGMcHhbhPDLphHQ
nRVJrtgssdLgCppvLQbg
RlVVZNVRJlsstldsBCNlczfjjSZmWTcmGmTSfmSm
RTHqgTgMwgnGTRzqTHCGfdFdfhmBrJrdvbFJMhPB
lNZNNNLttLWJBPBdZBFmdZ
SppscpLVStclNPWtCczqnQQwHTTgCGwq
hSHRCbZRSZhbRZBctnMVjwwtWtwh
GrdFzQrDdJstjcWttwsF
drPJLDPGPvDvzrJPQLdDHpZlwLgRmwCHLpwgSbff
zMSSnCtCdSdCtdfMdHMdtVBDjhWDHBqbTVVBqhbDjr
cPNhFFNRlNDlTBqjlTBG
RvmvRpPNRgwgPvFwhmdCssmCzdMshMmL
tttjgrpTwmCgCwgwrrlrHzbzqqFNzdJqqZnddJwNbh
cQjMjPMBfcLBSjGQBndFnzNdNnhzzNGFbF
sSQPLMfVPBVSfBMvVLSPfHCttDjCDRRtrVVglgpttD
vdTvdpBvcTPdSSvCLrCCDLDCQGDl
sRfnFgmFRMVsnqgRmqzmrrDBDwtHlLHtrLCDGL
qRMVjJgRFnJfMssMsgZScPJpZbPbPPWhBZSp
ZJgNJhGZglMZZFDTPSNqFSqTSb
mwdvwpsjrcjBvpwFrvbHcDqbWHRWDSPWDHSR
CsvpsLLjFzhlLGFZ
sDNQrMrNfrlQjJRgGjbTllHG
ZRhSnWFVSwBtFRBVvVgHgbzjgGTJnngmGmHC
vWZLShhvZLVtSFSLqwVrQdqpcqMDddRNQMdsNP
hQhSQbbwtHzShwhSQPbJRsLwRCjJmDCcvmqCcs
FNdBTBTNMsRqqCjTjL
GNdrdMBVFShhSLSGGL
cZzcCmjjcvdzdWqgWTZgPZgZhh
wSwVGSJFTffgJTNh
FSVpVlBMShzbjzcpvp
qqlblClRbnTvqTmRqlmnTwrdfdwFFNrngfddDBrNtr
PcLcQLMVLGMzHLMchhLcjLFrrNrBfrfFNJtNgJDDBNzt
sSjjGcGQscSVSMjHVMSVPSQsWmCmppZCmtCWbbWTlZTqTl
qWlVJmDJHWJHVJlsdVTdhbFNNgFhwhhhFhwwZg
npjnvQpStCQLvBpPnvtBtBpGSGbzbGDggGNbgwghzZNGGN
jBvLtvjnrtMDmmDRTTrsWc
pmwdwzJtFmmlpFsWwtstJPGgvNgCCLWCvPgNNPQCQv
RfbfTRBnRGQvPNnncc
ZTbPZSDSBfSBVSbbBRbbbtrFdtlFmVsswtFwzdpszw
hVphQcmdcWWprWWhChFQBsfHjDTTBCHlSsTSBgSH
vqBRqqzbqMZPMwSTDjJjlHDllgHZ
PMnMLqtMnntQhWBccthB
vqqvCSvHSSwqvqCddnvQFmNbVjbJVVmGNNVHNNlH
pggrhzWgptWhZsmVlFmgNNVNbj
RzpMLLhhphtzrRrSSbQTBQwSTDBwQM
DSFQDlDFRddDHQHQtFlDVsVMTzrMCLSWZLZffSzLWrfCJz
jjBBvpgmbppBPbMwBBBNbbZWZzzCCTzzZgzWcJccLzWz
bvPwNwmpnBNhPmqpPvnwwNmtRQGQMdQDQlsGVVGhRlGFsl
SfJJwDJgpGdSGJNSTwTVJDRbWWfLtCWCLtRLHWrtbWBf
cQQPnFhjjQlczhqllhszhqsQRWnrbrHdHtbWrBWBbtvvHBrW
qMqqqqzFFmPjmmsFjmzsmhjcDGSZTJgTdpZwZgwSZVpMTNVG
czrcHMcMJtCCPnpFmH
DwGGlvLljGmDRdwLdLjfhtFsssnFVpfttpptsnFPnp
TlRTghTjwTDRTDlZZQgWMMrMJMSZmM
BzdNzNdgNNPfgdNsdQdNvVMLLVQVMcCRCMRmvCGc
zHpplwwZrZlqlWWrpZwqlHhLvqMCRDCGVmLcqGMVvCMmMD
rWrjwWwHplZbwpZtHtJJbgfFTfsNnBbsfbSdTzgB
jPRRppDLDGDTLLggMMjpLTGcrJWHsttJfwnWrMvrJnvnrNfJ
blqbzBdzmhhbQWnsNHtJvfssfd
lhFhzSzzSZVNSlVPgDPCPCGTRcGR
cqWcNWffPftvsvfpqPtZsBzrbmbFddBmbcLbdDHbHz
TJgljTnGgnLBTZbHdBFz
JgSnJwSlgGJRwMtfPtvfwsZQZZtv
hHhPbQPTwsdwdHqtgttjpNfjDt
FFlCmSzRCCmlzzRGCFNvRpvjvtZNZqsRfNRg
mVmsFMGFzJFBwQTMnMQndd
QQVpQGcVdGmspHHLtbqfqfbt
JvZTFDFzJzhFCWCZZDzWPBCJfLbnnwLqttnsHHNPwtbHLwjn
DssTMWvvvGMcQGQGld
sshRHZSZRbSZHhBFBMpMWpFgbbtb
JfjTjmwwTPvfTNPTQlmFFFqqmFMBBqFgFt
vDTvJffQTJjJvPvTNSHRzhCsShRRRDtZHz
NFLsRDNNDNBDlgPPgBglQlzj
HJhdZpfJzlWQjjHw
ffJTppZZqTNlGnNsMG
ZMrWcWwqqvPZMndGdqlnnDLnVT
HpCsshCfpFfHHJDDSlSVQQGGflDQ
zssNzRJFhjNHNNHpJRwbwMMzWWtZPcbBbwbG
HlNHHLHsBDRpHLlsHRlJnMhfWZMRnvCCCnWhZj
wtqSmQqttzSSQdPmmwZhChJjWJjPggCZCfZJ
SSwtTbTQmbtdqmGTTcfqzDLHFsBLDGLNGrsBHFGrLB
FFDvWznMWWMrPnPnWPgsmgQbhJRslHbwHwVVsVHjBsHb
ZtSffffpdLqpSCLfCNqfLqLCjHjHbwhpBwJllHlRVQllphjj
ZcNCtcGSctZScqfNGScLNcczPJFmzmDzGzWnrWFPFWDvrM
DnTPspmTPsTCDQWRZzZzZRCRfCfHfh
BNcqTBcFgbVchVJhVR
dTwdrBrwTSPPWnnmSmsn
pfbbDbHpNBFmQbpNNBSlLtlDStSdSPJLtLJR
ZcszvwgVCZswFzVTRTlTlRLgRJSWJR
jzZvVwFjcjjnwvzwZcjMpqMpbGQbQmhhHhmfHQmh
hTbddhQCtdNmdtwtdhTBbCddRSWscczwcRSWLJzcFJzDsFsR
NflgfPZPcgSLJcWD
lPVNZMMMpZlZZvfrMvpbQHQhtbtqdTQHthrqhd
JlWSStwhWJSRJpJvJBjTwTqcwTsDjsCTCB
dqFzgFZGGQNVmTcCrjrzsBrB
fdgLFQLnPdnqShRMPhlJMpWW
TMPcsPDjdDhsDcDcTTTDvdvghBNFGGtmNrSrgSSBGNtNFg
CVCbJqlRVVWWpRqRQZRWVWJZBtmSFGNmggGmtmmBFbrGMGMt
JRqHVJVCRLZWTjMnfLTPcfLd
TRTZFTTrghrZVhVWdWZpMmbzbdzBmtDpDDzmzB
wcsSSsjfPfGPqQwqsQcfJJCtJGpppCBJzCbzJzCb
sPjflcwljfjfvqNcTZTRhtVWrNrVLnrR
rVLLsmwmCWTmsCTdwQrdTmqWDjDHjNGNPbjDBPNDNsZRDBjH
cFcSvgJvfhfLnShtMJtPHRRvRbBBGBPNBHPbND
hgLcgcLpJSMwzmrmzqQrmp
`;

// Part 1 /////////////////////////////////////////////////////////////////////////////////////////
let valuesArray = [];
let resultsArray = [];
let position = 0;
let mapSum = 0;
// Split the string into an array
valuesArray = splitByLine(valuesString, `\n`);

// Split array objects into nested arrays and remove duplicate characters within array objects
for (i = 0; i < valuesArray.length; i++) {
  position = RegExp(`(.{1,` + (valuesArray[i].length / 2) + `})`, `g`);
  valuesArray[i] = valuesArray[i].split(position).filter(c => c !== ``);
  // Remove duplicate characters in the array values
  valuesArray[i][0] = removeDupChar(valuesArray, i, 0);
  valuesArray[i][1] = removeDupChar(valuesArray, i, 1);
};
// Search nested array objects for shared characters
for (a = 0; a < valuesArray.length; a++) {
  findSharedChar(valuesArray, a, 0)
};
// Remove null results
resultsArray = Object.values(resultsArray).filter(x => x);

// Part 2 /////////////////////////////////////////////////////////////////////////////////////////
let valuesArray1 = []
let resultsArray1 = []
let position1 = 0
let mapSum1 = 0
// Split the string into an array
valuesArray1 = splitByLine(valuesString, `\n`);

// Remove duplicate characters
for (i = 0; i < valuesArray1.length; i++) {
  valuesArray1[i] = removeDupChar1(valuesArray1, i);
};
for ((i = 0, n = 0); n < valuesArray1.length; (i++, n += 3)) {
  resultsArray1[i] = valuesArray1.slice(n, n + 3).join(``);
  resultsArray1[i] = (resultsArray1[i].split(``).sort().join(``).match(/(.)(\1){2}/))[0][0];
};

///////////////////////////////////////////////////////////////////////////////////////////////////
// Sum the mapped values
resultsArray.forEach(n => {
  let mapValues = valuesMap[n];
  mapSum += mapValues
});
resultsArray1.forEach(n => {
  let mapValues = valuesMap[n];
  mapSum1 += mapValues
});

let results1 = mapSum;
let results2 = mapSum1;

console.log(`Part 1: ` + results1);
console.log(`Part 2: ` + results2);